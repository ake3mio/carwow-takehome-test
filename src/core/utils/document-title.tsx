import React, {useEffect} from "react";

export const withDocumentTitle = <T extends object, P extends object>(getTitle: (props: T) => string) => (Component: React.ComponentType<T>) => {

    return (props: T) => {
        const title = getTitle(props);

        useEffect(() => {
            if (title) {
                document.title = title;
            }
        }, [title]);

        return <Component {...props}/> as unknown as React.ComponentType<P>

    }
};
