import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
    return (
        <div className="widget-sidebar">
            <div className="sidebar-widget search">
                <form className="search-form">
                    <input className="form-control" name="search" placeholder="Suche" type="text" />
                    <button className="search-button" type="submit">
                        <i className="bx bx-search"></i>
                    </button>
                </form>	
            </div>

            <div className="sidebar-widget categories">
                <h3>Kategorien</h3>

                <ul>
                    <li>
                        <Link href="#">
                            <a>Geschäft</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Datenschutz</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Technologie</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Tipps</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Keine Kategorie</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="sidebar-widget latest-news">
                <h3 className="widget-title">Letzte Beiträge</h3>
                
                <ul>
                    <li>
                        <Link href="#">
                            <a>
                                Wie man als Freelancer Geld verdient
                            </a>
                        </Link>
                        <span>5. Juni 2021</span>
                    </li>
                    <li>
                        <Link href="#">
                            <a>
                               Marketing in Zeiten von Corona
                            </a>
                        </Link>
                        <span>1. Januar 2021</span>
                    </li>
                    <li>
                        <Link href="#">
                            <a>
                                Wie man einen erfolgreichen Abschluss des Jahres erreicht
                            </a>
                        </Link>
                        <span>8. November 2020</span>
                    </li>
                </ul>
            </div>

            <div className="sidebar-widget tags">
                <h3>Tags</h3>

                <ul>
                    <li>
                        <Link href="#">
                            <a>Geschäft</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Datenschutz</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Technologie</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Tipps</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Keine Kategorie</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BlogSidebar;