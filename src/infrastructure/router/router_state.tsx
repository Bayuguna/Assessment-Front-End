import { Routing } from "./router_constant";
import { ReactNode } from "react";
import Layout from "../../delivery/components/organisms/Layout";

interface RouterStateProps {
    router: string;
    children?: ReactNode;
}

const RouterState = (props: RouterStateProps) => {
    const { router, children } = props;
    
    if(router === Routing.AUTH){
        return <>
                {children}
            </>;
    }

    return  <Layout>
                {children}
            </Layout>

}

export default RouterState;

