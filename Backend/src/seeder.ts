import { seeder } from "nestjs-seeder";
import { MongooseModule } from "@nestjs/mongoose";
import { Qaie, qaieSchema } from "./Schema/qaie.schema";
import { QaiesSeeder } from "./Seeders/qaie.seeder";
 
seeder({
  imports: [
    MongooseModule.forRoot("mongodb+srv://faical:faical123@cluster0.zo300.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"),
    MongooseModule.forFeature([{ name: Qaie.name, schema: qaieSchema }]),
  ],
}).run([QaiesSeeder]);