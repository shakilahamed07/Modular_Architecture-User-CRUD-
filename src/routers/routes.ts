import type { Router } from "express";
import express from "express";


const router:Router = express.Router();

const moduleRoutes = [
    {
        path: "/user",
        route: ()=>{},
    },
]

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;