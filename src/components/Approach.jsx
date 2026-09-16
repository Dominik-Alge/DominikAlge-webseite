import { content } from "../data/content";

export default function Approach() {
  return (
    <section className="section approach">

      <div className="section-header">
        <span>Unser Ansatz</span>

        <h2>{content.approach.title}</h2>

        <p>{content.approach.text}</p>
      </div>

      <div className="approach-flow">

        {content.approach.steps.map((step, index) => (
          <div key={step} className="flow-card">

            <div className="flow-number">
              {index + 1}
            </div>

            <h3>{step}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}
