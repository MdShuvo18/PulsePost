
import { Card } from 'antd';

const { Meta } = Card;

const ExtraTwo = () => {
    return (
        <div className='space-y-6'>
            <h2 className='text-4xl font-extrabold text-center'>Our Most Viewed Blogs</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-3'>

                <div className="mockup-phone border-primary">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1"><Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://i.ibb.co/Y3HfTMG/marvin-meyer-SYTO3xs06f-U-unsplash.jpg" />}
                        >
                            <Meta title="Mastering the Art of Productivity: Tips from Successful Entrepreneurs" description="Unlock the secrets to peak productivity with insights and strategies from accomplished entrepreneurs, guiding you towards greater efficiency and success in your endeavors." />
                        </Card></div>
                    </div>
                </div>

                <div className="mockup-phone border-primary">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1"><Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://i.ibb.co/C0H3y81/eduardo-casajus-gorostiaga-j2-Lknng-UIS8-unsplash.jpg" />}
                        >
                            <Meta title="DIY Home Decor Ideas on a Budgets" description="Transform your living space with these creative and budget-friendly DIY home decor ideas, adding personality and style to every room without breaking the bank." />
                        </Card></div>
                    </div>
                </div>

                <div className="mockup-phone border-primary">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1"><Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://i.ibb.co/7CtfJHg/gabin-vallet-Yx-Cr-Qm9-XNgg-unsplash.jpg" />}
                        >
                            <Meta title="The Power of Mindfulness: Cultivating Inner Peace and Resilience" description="UExplore the transformative effects of mindfulness practices on mental health and well-being. From accomplished entrepreneurs, guiding you towards greater efficiency and success in your endeavors." />
                        </Card></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExtraTwo;