import type { NextApiRequest, NextApiResponse } from 'next'
import Mongo from '@/lib/mongo'

interface ImageDetails {
    name: string;
    alt: string;
    src: string;
    caption: string;
    type: string;
    actress: string;
    date: string;
    enhanced: boolean;
}

const resolve = async (req: NextApiRequest, res: NextApiResponse) => {
    let id;
    if (req.method !== "POST") return res.status(405).send({message: "Method not allowed"});
    const client = Mongo();
    const doc: ImageDetails = req.body;
    if (
        !doc 
        || typeof doc.name !== 'string'
        || typeof doc.alt !== 'string'
        || typeof doc.src !== 'string'
        || typeof doc.caption !== 'string'
        || typeof doc.type !== 'string'
        || typeof doc.actress !== 'string'
        || typeof doc.date !== 'string'
        || typeof doc.enhanced !== 'boolean'
    ) return res.status(400).send({message: "Bad request"});
    try {
        await client.connect();
        const db = client.db("gallery");
        const collection = db.collection("uhq-images");
        const result = await collection.insertOne(doc);
        id = result.insertedId;
    } finally {
        await client.close();
    }
    return res.status(201).send({id});
}

export default resolve