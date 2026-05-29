import Score from "../Score/Score";

/**
 * Renders the score and summary
 */
export default function Result() {
  return (
    <section>
      <Score score={76} type="Great" percentage={65} />
      {/*TO DO - Integrate the Summary component*/}
    </section>
  );
}
