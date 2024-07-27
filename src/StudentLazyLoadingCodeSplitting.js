import { Suspense, lazy } from "react";

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

function StudentLazyLoadingCodeSplitting() {
    return(
        <>
            <h1>Example for lazy loading or code splitting...</h1>
            <Suspense fallback={<div>Please wait for home content...</div>}>
                <Home />
            </Suspense>
            <Suspense fallback={<div>Please wait for about content...</div>}>
                <About />
            </Suspense>
        </>
    )
}

export default StudentLazyLoadingCodeSplitting;