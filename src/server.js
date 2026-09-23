import express from "express"
import { db } from "./db.js"
import { questions } from "./schema.js"

const app = express();
const port = process.env.PORT || 3000;

const router = express.Router();
const version = 1;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Everything okay"
    })
});

router.post('/', async(req, res) => {
    const { statement, difficulty, option_a, option_b, option_c, option_d, answer } = req.body;
    if (!statement || difficulty === undefined || difficulty === null || !option_a || !option_b || !option_c || !option_d || !answer) {
        return res.status(400).json({
            error: "data is missing!"
        })
    }

    try {
        const [newQues] = await db.insert(questions).values({
            statement: statement,
            difficulty: difficulty,
            option_a: option_a,
            option_b: option_b,
            option_c: option_c,
            option_d: option_d,
            answer: answer
        }).returning();

        return res.status(201).json({
            message: "The question is succesfully inserted",
            question: newQues
        });
    } catch (error) {
        console.error('Question insert failed:', error);
        return res.status(500).json({
            error: 'Question could not be inserted',
            detail: error.message
        });
    }

})


app.use(`/v${version}/questions`, router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});