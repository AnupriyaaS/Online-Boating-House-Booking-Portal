import React from "react"
import Footer from "../pages/footer";
import { Link } from "react-router-dom";
export default function Thanks(){
    return(
    <table
    id="container"
    width="500px"
    style={{ margin: "0 auto" }}
    border={0}
    cellPadding={0}
    cellSpacing={0}
  >
    <tbody>
      <tr>
        <td>
          <table
            id="header"
            border={0}
            cellPadding={0}
            cellSpacing={0}
            width="100%"
            style={{ height: 100, paddingTop: 25, background: "#fff" }}
          >
            <tbody>
              <tr>
                <td align="center" valign="top">
                  <img src="http://eldelentes.mx/welovetransfer/images/logoBlue.png" />
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
          <table
            border={0}
            cellPadding={0}
            cellSpacing={0}
            width="100%"
            id="body"
            style={{ background: "#F4F8F5" }}
          >
            <tbody>
              <tr>
                <td>
                  <table border={0} cellPadding={0} cellSpacing={0} width="100%">
                    <tbody>
                      <tr>
                        <td align="center">
                          <h3
                            id="title"
                            style={{
                              color: "#869CB2",
                              fontSize: 22,
                              fontFamily: "sans-serif",
                              fontWeight: 300
                            }}
                          >
                            <strong>Bonjour !!</strong> thanks for booking with us!
                          </h3>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table border={0} cellPadding={0} cellSpacing={0} width="100%">
                    <tbody>
                      <tr>
                        <td align="center">
                          <p
                            id="subtitle"
                            style={{
                              color: "#869CB2",
                              fontSize: 12,
                              fontFamily: "sans-serif",
                              textTransform: "uppercase"
                            }}
                          >
                            YOUR BOOKING RESUME
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    className="box"
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    style={{ padding: "0px 50px" }}
                  >
                    <tbody>
                      <tr
                        className="boxContainer"
                        style={{
                          background: "#fff",
                          padding: 10,
                          textAlign: "center"
                        }}
                      >
                        <td>
                          <h4
                            style={{
                              color: "#869CB2",
                              fontSize: 12,
                              fontFamily: "sans-serif"
                            }}
                          >
                            From:
                          </h4>
                          <h3
                            style={{
                              color: "#3A4863",
                              fontSize: 22,
                              fontFamily: "sans-serif"
                            }}
                          >
                            PMI Las Palmas Airport
                          </h3>
                        </td>
                        <td>
                          <h4
                            style={{
                              color: "#869CB2",
                              fontSize: 12,
                              fontFamily: "sans-serif"
                            }}
                          >
                            To:
                          </h4>
                          <h3
                            style={{
                              color: "#3A4863",
                              fontSize: 22,
                              fontFamily: "sans-serif"
                            }}
                          >
                            Grand Hotel Paradiso
                          </h3>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table border={0} cellPadding={0} cellSpacing={0} width="100%">
                    <tbody>
                      <tr>
                        <td align="center">
                          <p
                            style={{
                              color: "#6586A7",
                              fontSize: 14,
                              fontFamily: "sans-serif"
                            }}
                          >
                            Estimated time: <strong>3 hours 22 min</strong>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    className="box"
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    style={{ padding: "0px 50px" }}
                  >
                    <tbody>
                      <tr
                        className="boxContainer"
                        style={{
                          background: "#fff",
                          padding: 10,
                          textAlign: "center"
                        }}
                      >
                        <td align="center">
                          <h4
                            style={{
                              color: "#869CB2",
                              fontSize: 12,
                              fontFamily: "sans-serif"
                            }}
                          >
                            Passengers:
                          </h4>
                          <h3
                            style={{
                              color: "#3A4863",
                              fontSize: 22,
                              fontFamily: "sans-serif"
                            }}
                          >
                            2 kids, 2 kids
                          </h3>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table border={0} cellPadding={0} cellSpacing={0} width="100%">
                    <tbody>
                      <tr>
                        <td align="center">
                          <h4
                            style={{
                              color: "#869CB2",
                              fontSize: 12,
                              fontFamily: "sans-serif"
                            }}
                          >
                            Pickup Hour
                          </h4>
                          <h3
                            style={{
                              color: "#3A4863",
                              fontSize: 22,
                              fontFamily: "sans-serif"
                            }}
                          >
                            May 20 2017 / 18:00 PM
                          </h3>
                        </td>
                      </tr>
                    </tbody>
                    <Link to="/add"><button>Cancel Booking</button></Link>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            id="footer"
            border={0}
            cellPadding={0}
            cellSpacing={0}
            width="100%"
            style={{ background: "#fff" }}
          >
            <tbody>
              <tr>
                <td align="center">
                  <h4
                    style={{
                      color: "#869CB2",
                      fontSize: 12,
                      fontFamily: "sans-serif"
                    }}
                  >
                    Contact
                  </h4>
                  <Footer/>
                  
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  
);
}