import courses from "../Database/index.ts";
export default function CourseRoutes(app) {
  app.get("/api/courses", (req, res) => {
    const courses = courses;
    res.send(courses);
  });
  app.post("/api/courses", (req, res) => {
    const course = { ...req.body,
      _id: new Date().getTime().toString() };
    courses.push(course);
    res.send(course);
  });
  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    courses = courses.filter((c) => c._id !== id);
    res.sendStatus(204);
  });
  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    courses = courses.map((c) =>
      c._id === id ? { ...c, ...course } : c
    );
    res.sendStatus(204);
  });
  app.get("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = courses
      .find((c) => c._id === id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });


}
