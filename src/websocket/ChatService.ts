import { io } from "../http";
import { container } from "tsyringe";
import { CreateUserService } from "../services/CreateUserService";

io.on("connect", socket => {


    socket.on("start", async data => {
        const { name, avatar, email } = data;
        const createUserService = container.resolve(CreateUserService);


        const user = await createUserService.execute({
            name,
            avatar,
            email ,
            socket_id: socket.id,
        });

        console.log(user);
        
    });
});