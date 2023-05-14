import React from 'react'

const Contact = () => {
    return (
        <section class="page-wrapper ContactForm bg-white section-paddings">
            <div class="container">
                <div class="row  ">
                    <div class="col-md-6 left">
                        <h2 class="text-left  m-t-40 m-b-40">Si vous avez une question, n'hésitez pas à nous contacter</h2>
                        <h6>Contactez-Nous et Nous vous répondrons</h6>
                        <p>Contactez-Nous.
                        </p>
                        <div class="contact-box">
                            <button class="btn btn-danger">Canada</button>
                            <div class="content">
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <p>Ottawa</p>
                            </div>
                            <div class="content">
                                <div class="icon">
                                    <i class="far fa-envelope-open"></i>
                                </div>
                                <p><a href="#"> info@ich.org</a></p>
                            </div>
                        </div>
                        <div class="contact-box">
                            <button class="btn btn-danger">Bureau en Afrique</button>
                            <div class="content">
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <p>Abidjan – Cote d’ivoire</p>
                            </div>
                            <div class="content">
                                <div class="icon">
                                    <i class="far fa-envelope-open"></i>
                                </div>
                                <p><a href="cdn-cgi/l/email-protection.html#2f464149406f5c4c464a4b5a4c4e5b46404101405d48">info@scieducation.org</a></p>
                            </div>
                            <div class="content">
                                <div class="icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <p>+225 0101070522</p>
                            </div>
                            <div class="content">
                                <div class="icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <p>+225 0709178619</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 ">
                        <form action="https://www.scieducationusa.org/contact" method="POST">
                            <input type="hidden" name="_token" value="R9ZJms09UKpvT5D4hsQDuhjurBSFCCBaYeo3jIgZ" />
                            <h4>Nous contacter</h4>
                            <p>Veuillez saisir les informations requises ci-dessous pour vous inscrire immédiatement à un programme. Un conseiller en admission vous contactera pour vous aider dans vos démarches.</p>
                            <div class="form-group">
                                <input type="text" maxlength="191" value="" class="form-control " name="name" placeholder="Nom" required="" />
                            </div>
                            <div class="form-group">
                                <input type="email" value="" class="form-control " name="email" placeholder="Email" required="" />
                            </div>
                            <div class="form-group">
                                <input type="text" maxlength="191" class="form-control " name="subject" placeholder="Matière" />
                            </div>
                            <div class="form-group">
                                <textarea name="message" id="" cols="30" rows="7" maxlength="2000" class="form-control " placeholder="Message Fr" required=""></textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-warning"><i class="far fa-share-square"></i> Envoyez message</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact