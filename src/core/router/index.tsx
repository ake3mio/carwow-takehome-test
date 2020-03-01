import React, {Component} from 'react';
import Route from 'route-parser';
import './polyfills';

export type WithRouteParams<T = any> = {
    router: {
        params: { [k in keyof T]: any }
    }
}

export type RouteConfig = {
    component: React.ComponentType<unknown & WithRouteParams>
    path: string,
}


export type RouterProps = {
    routes: RouteConfig[]
}

type RouterState = {
    route: RouteConfig | null,
    params: object,
    pathname: string,
}


class Router extends Component<RouterProps, RouterState> {


    state = {
        route: null,
        params: {},
        pathname: "",
    };

    render() {

        const currentRoute = this.getCurrentRoute();

        if (currentRoute) {
            const RouteComponent = currentRoute.component;
            return <RouteComponent
                router={{
                    params: this.state.params
                }}
            />
        }

        return null;

    }

    getCurrentRoute(): RouteConfig {
        const {route} = this.state;

        if (route) {
            return (route as unknown as RouteConfig);
        }
        return {
            component: () => null,
            path: undefined
        } as any;
    }


    componentDidMount(): void {
        this.setComponent();
        window.history.onpushstate = this.setComponent;
        window.onpopstate = this.setComponent;
    }

    setComponent = () => {

        setTimeout(() => {
            let currentRoute;
            let currentParams = {};
            let routes = this.props.routes;
            for (let i = 0; i < routes.length; i++) {

                const route = new Route(routes[i].path);
                const match = route.match(document.location.pathname);
                if (match) {
                    currentRoute = routes[i];
                    currentParams = match;
                }
            }

            if (currentRoute && this.state.pathname !== document.location.pathname) {
                this.setState({route: currentRoute, params: currentParams as object});
            }
        }, 0)
    }
}

export default Router;
