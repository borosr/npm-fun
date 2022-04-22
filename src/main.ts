import { HelloWorld } from './hello/hello';

declare global {
    interface Window {
        HelloWorld: unknown;
    }
}

window.HelloWorld = HelloWorld;

export default HelloWorld;
