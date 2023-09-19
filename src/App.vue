<script setup></script>

<template>
  <main>
    <nav class="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
      <div class="container">
        <a class="navbar-brand mx-auto d-lg-none" href="index.html">
          Infidc srl
          <strong class="d-block">Infirmiére à domicile - Donceel</strong>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#hero">Accueil</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#about">A propos</a>
            </li>

            <a class="navbar-brand d-none d-lg-block" href="index.html">
              Infidc srl
              <strong class="d-block">Infirmiére à domicile - Donceel</strong>
            </a>

            <li class="nav-item">
              <a class="nav-link" href="#reviews">Mes patients</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#contact">Me contacter</a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.facebook.com/profile.php?id=100090712808242"
                target="_blank"
                class="social-icon-link bi-facebook nav-link"
                style="font-size: 20px"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="hero" id="hero">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div id="myCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../images/pexels-photo-4046996.jpeg" class="img-fluid" alt="" />
                </div>

                <div class="carousel-item">
                  <img src="../images/pexels-photo-4386466.webp" class="img-fluid" alt="" />
                </div>

                <div class="carousel-item">
                  <img src="../images/pexels-photo-4492050.jpeg" class="img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div class="heroText d-flex flex-column justify-content-center">
              <h1 class="mt-auto mb-2">
                Meilleur
                <div class="animated-info">
                  <span class="animated-item">santé</span>
                  <span class="animated-item">journée</span>
                  <span class="animated-item">vie</span>
                </div>
              </h1>

              <p class="mb-4">
                Charline, une infirmière à domicile expérimentée à l’écoute de vos besoins.
              </p>

              <div class="heroLinks d-flex flex-wrap align-items-center">
                <a class="custom-link me-4" href="#about" data-hover="Me contacter">Me contacter</a>

                <p class="contact-phone mb-0">
                  <i class="bi-phone"></i> <a href="tel:0496 51 44 86">0496 51 44 86</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12">
            <h2 class="mb-lg-3 mb-3">Charline Boniver</h2>

            <p>
              Charline Boniver, une infirmière à domicile enthousiaste et dynamique, consacre sa vie
              à offrir des soins de qualité à ses patients dans le confort de leur propre foyer.
              Avec une passion débordante, elle apporte un réconfort chaleureux et une expertise
              médicale à ceux qui en ont le plus besoin.
            </p>
            <p>
              Charline se déplace avec empressement, toujours prête à répondre aux appels urgents,
              prodiguant des soins infirmiers attentifs et personnalisés. Sa présence apporte un
              sentiment de sécurité et de confiance à ses patients, qui savent qu'ils peuvent
              compter sur elle à tout moment.
            </p>
            <p>
              Que ce soit pour administrer des médicaments, effectuer des pansements ou surveiller
              les signes vitaux, Charline reste vigilante et compétente. Elle établit une relation
              empathique avec ses patients, prenant le temps de les écouter, de comprendre leurs
              besoins et de les accompagner tout au long de leur parcours de guérison.
            </p>
            <p>
              Grâce à son énergie contagieuse, Charline crée une atmosphère positive et
              encourageante, stimulant la motivation de ses patients à prendre soin d'eux-mêmes.
              Elle les encourage à adopter des habitudes de vie saines, à suivre leur traitement
              médical et à maintenir leur bien-être physique et émotionnel.
            </p>
            <p>
              Charline Boniver incarne la vocation d'infirmière à domicile avec passion et
              dévouement. Son travail a un impact profond sur la vie de ses patients, leur
              permettant de retrouver leur indépendance et d'améliorer leur qualité de vie. Son
              engagement inébranlable envers les soins de santé à domicile fait d'elle une
              infirmière précieuse et irremplaçable dans la communauté.
            </p>
          </div>

          <div class="col-lg-4 col-md-5 col-12 mx-auto">
            <div
              class="featured-circle bg-white shadow-lg d-flex justify-content-center align-items-center"
            >
              <p class="featured-text">
                <span class="featured-number">4</span> années<br />
                d'éxpérience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="gallery">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-6 ps-0">
            <img
              src="../images/pexels-photo-5206922.webp"
              class="img-fluid galleryImage"
              alt="get a vaccine"
              title="Je vous écoute"
            />
          </div>

          <div class="col-lg-6 col-6 pe-0">
            <img
              src="../images/pexels-photo-3952241.webp"
              class="img-fluid galleryImage"
              alt="wear a mask"
              title="Vaccination"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding pb-0" id="timeline">
      <div class="container">
        <div class="row">
          <h2 class="text-center mb-lg-5 mb-4">Mon parcours</h2>

          <div class="timeline">
            <div
              class="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes"
            >
              <div
                class="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg"
              >
                <h3 class="text-light">Administratif CHU</h3>

                <p>
                  10 années de travaille au chu dans l'administration, durant lesquels j'ai suivie
                  des études d'infirmière en soirée
                </p>
              </div>

              <div class="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                <i class="bi-book timeline-icon"></i>
              </div>

              <div class="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-date">
                <time>2009 -> 2019</time>
              </div>
            </div>

            <div
              class="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes my-lg-5 my-4"
            >
              <div
                class="col-9 col-md-5 ms-md-4 ms-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg"
              >
                <h3 class="text-light">Diplôme d'infirmiére</h3>

                <p>J'ai obtenu mon diplôme en 2019</p>
              </div>

              <div class="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                <i class="bi-file-medical timeline-icon"></i>
              </div>

              <div class="col-9 col-md-5 pe-md-3 pe-lg-0 order-1 order-md-3 py-4 timeline-date">
                <time>2019</time>
              </div>
            </div>

            <div
              class="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes"
            >
              <div
                class="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg"
              >
                <h3 class="text-light">Bloc opératoire</h3>

                <p>Je travaille au bloc opératoire ophtalmologie</p>
              </div>

              <div class="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                <i class="bi-file-medical timeline-icon"></i>
              </div>

              <div class="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-date">
                <time>2019 -> Aujourd'hui</time>
              </div>
            </div>

            <div
              class="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes my-lg-5 my-4"
            >
              <div
                class="col-9 col-md-5 ms-md-4 ms-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg"
              >
                <h3 class="text-light">Infirmiére à domicile</h3>

                <p class="">
                  Je me lance en tant qu'indépendante, et exerce mon métier d'infirmiére à domicile
                </p>
              </div>

              <div class="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                <i class="bi-globe timeline-icon"></i>
              </div>

              <div class="col-9 col-md-5 pe-md-3 pe-lg-0 order-1 order-md-3 py-4 timeline-date">
                <time>2019 -> Aujourd'hui</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding pb-0" id="reviews">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="text-center mb-lg-5 mb-4">Mes patients</h2>

            <div class="owl-carousel reviews-carousel">
              <figure class="reviews-thumb d-flex flex-wrap align-items-center rounded">
                <div class="reviews-stars">
                  <i class="bi-star-fill"></i>
                  <i class="bi-star-fill"></i>
                  <i class="bi-star-fill"></i>
                  <i class="bi-star-fill"></i>
                  <i class="bi-star"></i>
                </div>

                <p class="text-primary d-block mt-2 mb-0 w-100"><strong>Super gentille</strong></p>

                <p class="reviews-text w-100">
                  J'ai enfin trouvée une infirmiére pour mes soins, qui est atentionnée! Merci !
                </p>

                <img
                  src="images/reviews/beautiful-woman-face-portrait-brown-background.jpeg"
                  class="img-fluid reviews-image"
                  alt=""
                />

                <figcaption class="ms-4">
                  <strong>Marie</strong>

                  <span class="text-muted">Patiente</span>
                </figcaption>
              </figure>

              <figure class="reviews-thumb d-flex flex-wrap align-items-center rounded">
                <div class="reviews-stars">
                  <i class="bi-star-fill"></i>
                  <i class="bi-star-fill"></i>
                  <i class="bi-star-fill"></i>
                  <i class="bi-star-fill"></i>
                  <i class="bi-star"></i>
                </div>

                <p class="text-primary d-block mt-2 mb-0 w-100">
                  <strong>Toujours à l'heure</strong>
                </p>

                <p class="reviews-text w-100">
                  Pas d'atente inutile, elle est réglé comme une horloge, j'adore !
                </p>

                <img
                  src="images/reviews/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg"
                  class="img-fluid reviews-image"
                  alt=""
                />

                <figcaption class="ms-4">
                  <strong>Jean-Yves</strong>

                  <span class="text-muted">Patient</span>
                </figcaption>
              </figure>

              <figure class="reviews-thumb d-flex flex-wrap align-items-center rounded">
                <div class="reviews-stars">
                  <i class="bi-star-fill"></i>
                  <i class="bi-star-fill"></i>
                  <i class="bi-star-fill"></i>
                  <i class="bi-star-fill"></i>
                  <i class="bi-star-fill"></i>
                </div>

                <p class="text-primary d-block mt-2 mb-0 w-100"><strong>Même pas mal</strong></p>

                <p class="reviews-text w-100">
                  Elle est venue me faire mon vaccin, rien sentit, super !
                </p>

                <img
                  src="images/reviews/portrait-british-woman.jpeg"
                  class="img-fluid reviews-image"
                  alt=""
                />

                <figcaption class="ms-4">
                  <strong>Martine</strong>

                  <span class="text-muted">Patient</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-12 mx-auto">
            <div class="booking-form">
              <h2 class="text-center mb-lg-3 mb-2">Prendre rendez-vous</h2>

              <form role="form" action="#contact" method="post">
                <div class="row">
                  <div class="col-lg-6 col-12">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="form-control"
                      placeholder="Nom Prénom"
                      required
                    />
                  </div>

                  <div class="col-lg-6 col-12">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      class="form-control"
                      placeholder="Adresse E-mail"
                      required
                    />
                  </div>

                  <div class="col-lg-6 col-12">
                    <input
                      type="telephone"
                      name="phone"
                      id="phone"
                      class="form-control"
                      placeholder="Telephone"
                    />
                  </div>

                  <div class="col-lg-6 col-12">
                    <input type="date" name="date" id="date" value="" class="form-control" />
                  </div>

                  <div class="col-12">
                    <textarea
                      class="form-control"
                      rows="5"
                      id="message"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div class="col-lg-3 col-md-4 col-6 mx-auto">
                    <button type="submit" class="form-control" id="submit-button">Envoyer</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer section-padding" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 me-auto col-12">
          <h5 class="mb-lg-4 mb-3">Mes horaires</h5>

          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex">Lundi : Repos</li>

            <li class="list-group-item d-flex">
              Lundi - mardi - mercredi
              <span>8:00 - 15:30</span>
            </li>

            <li class="list-group-item d-flex">
              Jeudi - vendredi
              <span>10:30 - 17:30</span>
            </li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-6 col-12 my-4 my-lg-0">
          <h5 class="mb-lg-4 mb-3">Mes coordonées</h5>

          <p><a href="mailto:hello@company.co">charlineboniver@gmail.com</a></p>

          <p>
            Rue Trixhe 57<br />
            4357 Jeneffe
          </p>

          <p><b>Numéro d'entreprise :</b> <br />BE 0782.930.055</p>
          <p><b>Numéro INAMI :</b> <br />4-36477-68-401</p>
        </div>

        <div class="col-lg-3 col-md-6 col-12 ms-auto">
          <h5 class="mb-lg-4 mb-3">Réseaux sociaux</h5>

          <ul class="social-icon">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100090712808242"
                target="_blank"
                class="social-icon-link bi-facebook"
                style="font-size: 50px"
              ></a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-12 ms-auto mt-4 mt-lg-0">
          <p class="copyright-text">
            Copyright © MicroFS Consulting 2023 <br /><br />Design:
            <a href="https://microfs.be" target="_parent">MicroFS</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
