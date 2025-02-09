import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Roadmap() {
    const stages = [
        { title: "Genin", description: "The Genin level is designed for beginners who are just starting their journey in software development. At this stage, developers learn fundamental programming concepts and technologies.", link: "/handbook/genin/intro" },
        { title: "Chunin", description: "The Chunin level is for developers who already have a basic understanding and are transitioning to building more complex applications.", link: "/handbook/chunin/intro" },
        { title: "Jounin", description: "The Jonin level is for developers who have mastered the basics and intermediate concepts and want to deepen their knowledge further.", link: "/handbook/jounin/intro" },
        { title: "Sannin", description: "The Sannin level represents an expert-level developer who has deep knowledge and focuses on complex solutions and scalability.", link: "/handbook/sannin/intro" },
        { title: "Kage", description: "The Kage level is the highest in software development, where developers not only have technical expertise but also lead large-scale projects and make impactful architectural decisions.", link: "/handbook/kage/intro" }
    ];

    return (
        <>
          <div className="wrapper">
              <h1>Roadmap</h1>
              <VerticalTimeline lineColor="silver">
                  {stages.map((stage, index) => (
                      <VerticalTimelineElement
                          key={index}
                          className="vertical-timeline-element--work"
                          contentStyle={{ background: '#0ead95', color: '#fff', border: '2px solid #0ead95', padding: '20px' }}
                          iconStyle={{ background: '#0ead95', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold' }}
                          icon={<span>{index + 1}</span>}
                          arrowStyle={{ display: 'none' }}
                      >
                          <h3 className="vertical-timeline-element-title">{stage.title}</h3>
                          <p>{stage.description}</p>
                          <button 
                              onClick={() => window.location.href = stage.link} 
                              style={{ 
                                  background: '#fff', 
                                  color: '#0ead95', 
                                  padding: '10px 20px', 
                                  border: 'none', 
                                  cursor: 'pointer', 
                                  marginTop: '10px', 
                                  borderRadius: '20px' 
                              }}
                          >
                              Learn More
                          </button>
                      </VerticalTimelineElement>
                  ))}
              </VerticalTimeline>
          </div>
        </>
    );
}

export default Roadmap;