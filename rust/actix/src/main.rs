use std::io;

use actix_web::{get, App, HttpResponse, HttpServer, Responder};

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Rust on Nubo")
}

#[actix_web::main]
async fn main() -> io::Result<()> {
    HttpServer::new(|| App::new().service(hello))
        .bind("0.0.0.0:5555")?
        .run()
        .await
}
