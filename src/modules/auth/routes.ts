import {NextFunction, Request, Response, Router} from "express"
import { RegisterController } from "./controller";
import { HttpResponse } from "../../utils/httpResponse";
import { CodesHttpEnum } from "../../enums/codesHttpEnum";

const routes = Router();

routes.post('/register', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await RegisterController(req)
        res.status(response.code).json(response)
    } catch (error) {
        HttpResponse.fail(res, CodesHttpEnum.internalServerError, (error as any).toString())
    }
})

export default routes;