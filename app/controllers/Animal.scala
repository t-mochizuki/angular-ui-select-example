package controllers

import play.api._
import play.api.mvc._
import play.api.libs.json._

object Animal extends Controller {
  def show = Action {
    Ok(views.html.index.render("tokyo"))
  }
  def list = Action {
    Ok(Json.parse("""[ { "id": 1, "name": "dog" }, { "id": 2, "name": "cat" }, { "id": 3, "name": "bird" } ]"""))
  }
}
