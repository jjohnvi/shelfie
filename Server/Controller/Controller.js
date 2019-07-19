module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, price, image_url } = req.body;

    dbInstance
      .create_inventory([name, price, image_url])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong, Our engineers have been informed!"
        });
        console.log(err);
      });
  },

  getOne: (req, res, next) => {
    const { id } = req.params;

    dbInstance
      .read_inventory(id)
      .then(inventory => res.status(200).send(inventory))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Something went wrong, try again later"
        });
        console.log(err);
      });
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_inventories(req.body)
      .then(inventories => res.status(200).send(inventories))
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: "Something went wrong, try again later." });
        console.log(err);
      });
  },

  update: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params, query } = req;

    dbInstance
      .update_inventory([params.id, query.desc])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops, error." });
        console.log(err);
      });
  },

  delete: (req, res, next) => {
    const dbInstnace = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .delete_inventory(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops, error." });
        console.log(err);
      });
  }
};
