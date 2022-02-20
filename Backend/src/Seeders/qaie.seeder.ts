import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Qaie } from "../Schema/qaie.schema";
import { Seeder, DataFactory } from "nestjs-seeder";
 
@Injectable()
export class QaiesSeeder implements Seeder {
  constructor(@InjectModel(Qaie.name) private readonly qaiemodel: Model<Qaie>) {}
 
  async seed(): Promise<any> {
    // Generate 10 users.
    const qaies = DataFactory.createForClass(Qaie).generate(5);
 
    // Insert into the database.
    return this.qaiemodel.insertMany(qaies);
  }
 
  async drop(): Promise<any> {
    return this.qaiemodel.deleteMany({});
  }
}