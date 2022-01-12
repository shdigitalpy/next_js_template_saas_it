import React from 'react';
import Link from 'next/link';

const Comments = () => {
    return (
        <>
            <div className="comments">
                <h3>Kommentare (2)</h3>

                <ul>
                    <li>
                        <img src="/images/blog-details/comments-img-1.jpg" alt="Image" />
                        <h3>Anita Frei</h3>
                        <span>29. August 2021</span>

                        <p>Lorem ipsum dolora sit amet, consectetur adipiscing elit sed do eiusmod tempor incdidunt labore et dolore magna aliqua. Veniam quis nostrud exercitation ullaco laboris</p>

                        <Link href="#"><a>Antworten</a></Link>
                    </li>

                    <li>
                        <img src="/images/blog-details/comments-img-2.jpg" alt="Image" />
                        <h3>Benjamin Erdin</h3>
                        <span>5. März 2020</span>

                        <p>Lorem ipsum dolora sit amet, consectetur adipiscing elit sed do eiusmod tempor incdidunt labore et dolore magna aliqua. Veniam quis nostrud exercitation ullaco laboris</p>

                        <Link href="#"><a>Antworten</a></Link>
                    </li>
                </ul>
            </div>

            <div className="leave-reply">
                <h3>Einen Kommentar schreiben</h3>
                <p>Deine Email-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert*</p>

                <form>
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <div className="form-group">
                                <label>Name*</label>
                                <input type="text" name="name" id="name" className="form-control" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <div className="form-group">
                                <label>E-Mail Adresse*</label>
                                <input type="email" name="email" id="email" className="form-control" />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Webseite</label>
                                <input type="text" name="your-website-link" id="your-website-link" className="form-control" />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>Kommentar</label>
                                <textarea name="message" className="form-control" id="message" rows="8"></textarea>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-group">
                                <input type="checkbox" id="chb2" />
                                <span>
                                    Meinen Namen, E-Mail und Website in diesem Browser speichern, bis ich das nächste Mal kommentiere.
                                </span>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <button type="submit" className="default-btn saas-btn">
                                Abschicken
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Comments;