import type { NextApiRequest, NextApiResponse } from 'next'
import Mongo from '@/lib/mongo'

const resolve = async (req: NextApiRequest, res: NextApiResponse) => {
    let page = 1
    const client = Mongo();
    try {
        await client.connect();
        const db = client.db("gallery");
        const collection = db.collection("uhq-images");
        const result = await collection.find({})
            .skip((page - 1) * 30)
            .limit(30)
            .toArray();
        res.status(200).send(result);
    }
    finally {
        await client.close();
    }
}

export default resolve