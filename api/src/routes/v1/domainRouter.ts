import axios from "axios";
import express from "express";
import { vercel } from "../../lib/config";

const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const domainData = await axios.get(
      `${vercel.URL}` + "/v8/projects/" + vercel.PROJECT_ID + "/domains/",
      {
        headers: {
          Authorization: "Bearer " + vercel.TOKEN,
        },
      }
    );
    res.status(200).send(domainData.data);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});

router.post("/:domain/", async (req, res) => {
  try {
    const { domain } = req.params;
    const domainData = await axios.post(
      `${vercel.URL}` + "/v8/projects/" + vercel.PROJECT_ID + "/domains/",
      {
        name: domain,
      },
      {
        headers: {
          Authorization: "Bearer " + vercel.TOKEN,
        },
      }
    );
    res.status(200).send(domainData.data);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
