import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Faqs = () => {
    return (
        <div className="faq-accordion">
            <h2>Häufige Fragen</h2>

            <Accordion allowZeroExpanded preExpanded={['a']}>
                <AccordionItem uuid="a">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Das ist eine Frage bezüglich unserer Dienstleistung?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida amet, consectetur adipiscing.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="b">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                           Das ist eine Frage bezüglich unserer Dienstleistung?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida amet, consectetur adipiscing.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="c">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                           Das ist eine Frage bezüglich unserer Dienstleistung?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida amet, consectetur adipiscing.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="d">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Das ist eine Frage bezüglich unserer Dienstleistung?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida amet, consectetur adipiscing.</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Faqs;