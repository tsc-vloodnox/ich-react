import React from 'react'

const Contact = () => {
    return (
        <div className="page-wrapper">
            <div className="page-title">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-text">
                                <h2 >Nous Contacter</h2>
                                <ul >
                                    <li ><a routerlink="/" ng-reflect-router-link="/" href="/">Home</a></li>
                                    <li ><i className="icofont-simple-right"></i>
                                    </li>
                                    <li >Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='ContactForm'>
                <div className="container">
                    <div className="row  ">
                        <div className="col-md-6 left">
                            <h2 className="text-left  m-t-40 m-b-40">Si vous avez une question, n'hésitez pas à nous contacter</h2>
                            <h6>Contactez-Nous et Nous vous répondrons</h6>
                            <p>Contactez-Nous.
                            </p>
                            <div className="contact-box">
                                <button className="btn btn-danger">Canada</button>
                                <div className="content">
                                    <div className="icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <p>Ottawa</p>
                                </div>
                                <div className="content">
                                    <div className="icon">
                                        <i className="far fa-envelope-open"></i>
                                    </div>
                                    <p><a href="#"> info@ich.org</a></p>
                                </div>
                            </div>
                            <div className="contact-box">
                                <button className="btn btn-danger">Bureau en Afrique</button>
                                <div className="content">
                                    <div className="icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <p>Abidjan – Cote d’ivoire</p>
                                </div>
                                <div className="content">
                                    <div className="icon">
                                        <i className="far fa-envelope-open"></i>
                                    </div>
                                    <p><a href="cdn-cgi/l/email-protection.html#2f464149406f5c4c464a4b5a4c4e5b46404101405d48">info@scieducation.org</a></p>
                                </div>
                                <div className="content">
                                    <div className="icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <p>+225 0101070522</p>
                                </div>
                                <div className="content">
                                    <div className="icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <p>+225 0709178619</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <form action="https://www.scieducationusa.org/contact" method="POST">
                                <input type="hidden" name="_token" value="R9ZJms09UKpvT5D4hsQDuhjurBSFCCBaYeo3jIgZ" />
                                <h4>Nous contacter</h4>
                                <p>Veuillez saisir les informations requises ci-dessous pour vous inscrire immédiatement à un programme. Un conseiller en admission vous contactera pour vous aider dans vos démarches.</p>
                                <div className="form-group">
                                    <input type="text" maxlength="191" value="" className="form-control " name="name" placeholder="Nom" required="" />
                                </div>
                                <div className="form-group">
                                    <input type="email" value="" className="form-control " name="email" placeholder="Email" required="" />
                                </div>
                                <div className="form-group">
                                    <input type="text" maxlength="191" className="form-control " name="subject" placeholder="Matière" />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" id="" cols="30" rows="7" maxlength="2000" className="form-control " placeholder="Message Fr" required=""></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-warning"><i className="far fa-share-square"></i> Envoyez message</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact