exports.get404 = (req, res) => {
  res.status(404).render("404", { docTitle: "not found", path: "" });
};
