import "../css/BoardSelect.css";

const BoardSelectPage = () => {
  return (
    <section className="dashboard-page">
      <div className="side-nav">
        <div className="side-nav-header">
          <p className="side-nav-title">Username Dashboard</p>
        </div>
      </div>
      <div className="board-wrapper">
        <div className="divider"></div>
        <div className="whiteboard">
          <div className="board-grid">
            <h4s className="grid-header">Applications</h4s>
            <div className="board-listings">
              <div className="board-item"></div>
              <div className="board-item"></div>
              <div className="board-item"></div>
              <div className="board-item"></div>
              <div className="board-item"></div>
              <div className="board-item"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardSelectPage;
