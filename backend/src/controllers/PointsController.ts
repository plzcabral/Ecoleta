import { Request, Response } from 'express';
import knex from '../database/connection';

export class PointsController {
  async show(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = request.body;

    const ids = await knex('points').insert({
      image: 'image-fake',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    });

    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id: ids[0]
      }
    });

    await knex('point_items').insert(pointItems);

    return response.json({ success: true });
  }
}