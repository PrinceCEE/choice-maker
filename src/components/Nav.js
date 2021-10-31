import { MdOutlineArrowBackIosNew, MdInfoOutline } from "react-icons/md";
import { useHistory } from "react-router-dom";

const Nav = ({ showStats, showArror }) => {
  const history = useHistory();

  return (
    <div className="Nav">
      <div>
        {showArror && (
          <span className="arrow-button" onClick={() => history.goBack()}>
            <MdOutlineArrowBackIosNew />
          </span>
        )}
      </div>
      {showStats && (
        <div className="info" onClick={() => history.push("/stats")}>
          <MdInfoOutline />
          <span>Statistics</span>
        </div>
      )}
    </div>
  );
};

export default Nav;
