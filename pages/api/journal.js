import { poolQuery } from '../../utils/dbPool'; // Adjust the import path based on your project structure

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Add a new journal entry
        const { entry_date, entry_text, privacy } = req.body;
        const result = await poolQuery(
            'INSERT INTO journal_entries (entry_date, entry_text, privacy) VALUES (?, ?, ?)',
            [entry_date, entry_text, privacy]
        );
        res.status(201).json({ message: 'Entry added', id: result.insertId });
    } else if (req.method === 'GET') {
        const { month, year, includePrivate } = req.query;

        // Construct the SQL query based on the request parameters
        let query = 'SELECT * FROM journal_entries WHERE ';
        const queryParams = [];

        // Filter by month and year if provided
        if (month && year) {
            query += 'MONTH(entry_date) = ? AND YEAR(entry_date) = ? AND ';
            queryParams.push(month, year);
        }

        // Include private entries if the correct password is provided
        if (includePrivate === 'true') {
            query += 'privacy IN ("public", "private")';
        } else {
            query += 'privacy = "public"';
        }

        query += ' ORDER BY entry_date ASC';

        // Fetch journal entries based on the constructed query
        const rows = await poolQuery(query, queryParams);
        res.status(200).json(rows);
    } else if (req.method === 'PUT') {
        // Update the date and text of an existing journal entry
        const { id, entry_date, entry_text } = req.body;
        await poolQuery(
            'UPDATE journal_entries SET entry_date = ?, entry_text = ? WHERE id = ?',
            [entry_date, entry_text, id]
        );
        res.status(200).json({ message: 'Entry updated' });
    } else if (req.method === 'DELETE') {
        const { id } = req.body;

        await poolQuery('DELETE FROM journal_entries WHERE id = ?', [id]);
        res.status(200).json({ message: 'Entry deleted' });
    } else {
        // Handle other HTTP methods or return an error
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
