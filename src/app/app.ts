import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { origin } from '../utils/miscellaneous/constants';
import RootRouter from './router';

class App {
    public app:Application;
    private port:number;
    private origin: string[] = origin;
    
    constructor(port:number){
        this.app = express();
        this.port = port;
        this.initMiddleware();
        this.initRouters();
    }

    public startServer(){
        this.app.listen(this.port, () => {
            console.log(`🚀 Server launched successfully on port ${this.port}`);
            console.log(`⏰ Started at: ${new Date().toISOString()}`);
             console.log(`🔗 Access: http://localhost:${this.port}`);
        })
    }

    private initMiddleware(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(cors({origin: this.origin, credentials: true}));
    }

    private initRouters(){
        this.app.get('/', async(req: Request, res: Response) => {
            res.send('Servier is running');
        })

        this.app.use('/api/v1', new RootRouter().v1Router);
    }
}

export default App;