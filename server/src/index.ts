import e, { NextFunction, Request, Response } from "express";

const app = e();
const port = 5123;

app.use(e.json({
    type: 'application/json',
}));
app.use(e.urlencoded({
    extended: true,
}))

function homePage(req: Request, res: Response) {
    return res.send('HOMEPAGE');
}
app.get('/', homePage as any);

app.use((_req: Request, res: Response, _next: NextFunction) => {
    res.status(404).send("Sorry can't find that!");
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err.stack)
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log('SERVER: http://localhost:' + port);
});