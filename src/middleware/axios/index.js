import { multiClientMiddleware } from "redux-axios-middleware";
import defaultClient from "./client/default";

const client = {
    default: defaultClient
}

export default multiClientMiddleware(client, {
    returnRejectedPromiseOnError: true,
})