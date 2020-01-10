export default (req, res) => {
    res.status(200).json({ book: `Book ${req.query.id}`});
}