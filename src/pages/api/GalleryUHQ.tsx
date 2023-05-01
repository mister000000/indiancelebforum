import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const resolve = (req: NextApiRequest, res: NextApiResponse) => {

    const directoryPath = path.join(process.cwd(), 'public', 'uhq');

    // Read the contents of the directory synchronously
    const fileNames = fs.readdirSync(directoryPath);
    res.status(200).json({ fileNames: fileNames })
}

export default resolve