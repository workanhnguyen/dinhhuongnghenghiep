import React, { useState, memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from "../../constants";
import { Footer } from "../../container";
import "../../css/bootstrap.min.css";
import "./Survey.scss";

const navList = [
    {
        title: 'Thông tin',
        route: '/current-user'
    },
    {
        title: 'Đăng xuất',
        route: '/'
    }
];

const hollands = [
  {
    image: images.realistic,
    content1: 'Người thuộc nhóm Holland Kỹ thuật – Realistic thường thực tế, ưa hành động hơn suy nghĩ, thích khám phá, thao tác một cách trật tự và có hệ thống, thích làm việc với những vật cụ thể như máy móc, công cụ dụng cụ, con vật,…',
    content2: 'Người thuộc nhóm Kỹ thuật thường được mô tả là những người trung thực, thẳng thắn và kiên trì trong công việc. Họ yêu thích các hoạt động yêu cầu sự vận động của cơ thể và các kỹ năng yêu cầu sức mạnh, thể lực. Họ tỉ mỉ trong các thao tác, cẩn thận với từng chi tiết nhỏ. Họ thiên về những công việc thực tế, rõ ràng, yêu cầu ra kết quả hoặc thành phẩm cụ thể hơn là suy nghĩ, tìm ra ý tưởng. Họ thích giải quyết vấn đề theo hướng đưa ra cách giải pháp mang tính ứng dụng cao hơn là tư duy trừu tượng. Đa phần người thuộc nhóm kỹ thuật bộc trực, hơi khô khan và không giỏi giao tiếp.'
  
  },
  {
    image: images.investigative,
    content1: 'Người thuộc nhóm Holland Kỹ thuật – Realistic thường thực tế, ưa hành động hơn suy nghĩ, thích khám phá, thao tác một cách trật tự và có hệ thống, thích làm việc với những vật cụ thể như máy móc, công cụ dụng cụ, con vật,…',
    content2: 'Người thuộc nhóm Kỹ thuật thường được mô tả là những người trung thực, thẳng thắn và kiên trì trong công việc. Họ yêu thích các hoạt động yêu cầu sự vận động của cơ thể và các kỹ năng yêu cầu sức mạnh, thể lực. Họ tỉ mỉ trong các thao tác, cẩn thận với từng chi tiết nhỏ. Họ thiên về những công việc thực tế, rõ ràng, yêu cầu ra kết quả hoặc thành phẩm cụ thể hơn là suy nghĩ, tìm ra ý tưởng. Họ thích giải quyết vấn đề theo hướng đưa ra cách giải pháp mang tính ứng dụng cao hơn là tư duy trừu tượng. Đa phần người thuộc nhóm kỹ thuật bộc trực, hơi khô khan và không giỏi giao tiếp.'
  },
  {
    image: images.artistic,
    content1: 'Người thuộc nhóm Holland Kỹ thuật – Realistic thường thực tế, ưa hành động hơn suy nghĩ, thích khám phá, thao tác một cách trật tự và có hệ thống, thích làm việc với những vật cụ thể như máy móc, công cụ dụng cụ, con vật,…',
    content2: 'Người thuộc nhóm Kỹ thuật thường được mô tả là những người trung thực, thẳng thắn và kiên trì trong công việc. Họ yêu thích các hoạt động yêu cầu sự vận động của cơ thể và các kỹ năng yêu cầu sức mạnh, thể lực. Họ tỉ mỉ trong các thao tác, cẩn thận với từng chi tiết nhỏ. Họ thiên về những công việc thực tế, rõ ràng, yêu cầu ra kết quả hoặc thành phẩm cụ thể hơn là suy nghĩ, tìm ra ý tưởng. Họ thích giải quyết vấn đề theo hướng đưa ra cách giải pháp mang tính ứng dụng cao hơn là tư duy trừu tượng. Đa phần người thuộc nhóm kỹ thuật bộc trực, hơi khô khan và không giỏi giao tiếp.'
  },
  {
    image: images.social,
    content1: 'Người thuộc nhóm Holland Kỹ thuật – Realistic thường thực tế, ưa hành động hơn suy nghĩ, thích khám phá, thao tác một cách trật tự và có hệ thống, thích làm việc với những vật cụ thể như máy móc, công cụ dụng cụ, con vật,…',
    content2: 'Người thuộc nhóm Kỹ thuật thường được mô tả là những người trung thực, thẳng thắn và kiên trì trong công việc. Họ yêu thích các hoạt động yêu cầu sự vận động của cơ thể và các kỹ năng yêu cầu sức mạnh, thể lực. Họ tỉ mỉ trong các thao tác, cẩn thận với từng chi tiết nhỏ. Họ thiên về những công việc thực tế, rõ ràng, yêu cầu ra kết quả hoặc thành phẩm cụ thể hơn là suy nghĩ, tìm ra ý tưởng. Họ thích giải quyết vấn đề theo hướng đưa ra cách giải pháp mang tính ứng dụng cao hơn là tư duy trừu tượng. Đa phần người thuộc nhóm kỹ thuật bộc trực, hơi khô khan và không giỏi giao tiếp.'
  },
  {
    image: images.enterprising,
    content1: 'Người thuộc nhóm Holland Kỹ thuật – Realistic thường thực tế, ưa hành động hơn suy nghĩ, thích khám phá, thao tác một cách trật tự và có hệ thống, thích làm việc với những vật cụ thể như máy móc, công cụ dụng cụ, con vật,…',
    content2: 'Người thuộc nhóm Kỹ thuật thường được mô tả là những người trung thực, thẳng thắn và kiên trì trong công việc. Họ yêu thích các hoạt động yêu cầu sự vận động của cơ thể và các kỹ năng yêu cầu sức mạnh, thể lực. Họ tỉ mỉ trong các thao tác, cẩn thận với từng chi tiết nhỏ. Họ thiên về những công việc thực tế, rõ ràng, yêu cầu ra kết quả hoặc thành phẩm cụ thể hơn là suy nghĩ, tìm ra ý tưởng. Họ thích giải quyết vấn đề theo hướng đưa ra cách giải pháp mang tính ứng dụng cao hơn là tư duy trừu tượng. Đa phần người thuộc nhóm kỹ thuật bộc trực, hơi khô khan và không giỏi giao tiếp.'
  },
  {
    image: images.conventional,
    content1: 'Người thuộc nhóm Holland Kỹ thuật – Realistic thường thực tế, ưa hành động hơn suy nghĩ, thích khám phá, thao tác một cách trật tự và có hệ thống, thích làm việc với những vật cụ thể như máy móc, công cụ dụng cụ, con vật,…',
    content2: 'Người thuộc nhóm Kỹ thuật thường được mô tả là những người trung thực, thẳng thắn và kiên trì trong công việc. Họ yêu thích các hoạt động yêu cầu sự vận động của cơ thể và các kỹ năng yêu cầu sức mạnh, thể lực. Họ tỉ mỉ trong các thao tác, cẩn thận với từng chi tiết nhỏ. Họ thiên về những công việc thực tế, rõ ràng, yêu cầu ra kết quả hoặc thành phẩm cụ thể hơn là suy nghĩ, tìm ra ý tưởng. Họ thích giải quyết vấn đề theo hướng đưa ra cách giải pháp mang tính ứng dụng cao hơn là tư duy trừu tượng. Đa phần người thuộc nhóm kỹ thuật bộc trực, hơi khô khan và không giỏi giao tiếp.'
  },
];

function Survey() {

    const [toggle, setToggle] = useState(false);

  return (
    <div id='survey'>
        <div className="container">
            <div className="main__header">
                <Link to="/" className="main__header-img">
                    <img src={images.logo} />
                </Link>
                <div className="main__header-user-info">
                    <span>Changed info</span>
                    <div className="app__navbar-menu">
                        <img src={images.logoOU} onClick={() => setToggle(true)} />
                        {toggle && (
                            <motion.div
                                whileInView={{ x: [300, 0] }}
                                transition={{ duration: 0.85, ease: 'easeOut' }}
                                className='main__hiden-panel'
                            >
                                <HiX onClick={() => setToggle(false)} />
                                <ul className="app__navbar-links">
                                {navList.map((item, index) => { 
                                    return (<li key={index}>
                                            <Link 
                                                data-scroll 
                                                to={item.route}
                                                onClick={() => setToggle(false)}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>);
                                    })}
                                </ul>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
            <div className="row no-gutters justify-content-center align-items-center main__content">
                <div className="col-12 col-sm-12 col-lg-6 col-xl-6">
                  <div className="survey__image">
                    <img src={images.holland} />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="survey__content">
                    <p>
                      Trắc nghiệm Holland chính là cơ sở để bạn đối chiếu sở thích, năng lực tự nhiên của mình với yêu cầu của các nhóm ngành nghề. Từ đó bạn có thể định hướng nghề nghiệp theo nhóm ngành phù hợp nhất.
                      Kết quả Bài trắc nghiệm định hướng nghề nghiệp giúp bạn tìm ra ba kiểu tính cách của bạn tương ứng với 3 mật mã Holland (ví dụ: RCE hoặc ECR ). Sau đó dùng mã này kết nối với những nghề nghiệp cụ thể.
                      Hãy thả lỏng tâm trí và thực hiện khảo sát một cách thoải mái nhất.
                    </p>
                    <button className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">Bắt đầu ngay!</button>
                  </div>
                </div>
            </div>
            {hollands.map((item, index) => (
              <div className="row no-gutters justify-content-center align-items-center explain__content">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <div className="survey__explain">
                      <img src={item.image} />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                  <div className="survey__explain">
                      <p>{item.content1}</p>
                      <p>
                        <b>Đặc điểm tính cách: </b>
                        {item.content2}
                      </p>
                  </div>
                </div>
              </div>
            ))}

        </div>
        <Footer />
    </div>
  )
}

export default memo(Survey)