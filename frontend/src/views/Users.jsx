import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";
import axiosClient from "../axios-client";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [links, setLinks] = useState([]);
  const { setNotification } = useStateContext();

  useEffect(() => {
    getUsers(currentPage);
  }, [currentPage]);

  const onDeleteClick = (u) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }
    axiosClient.delete(`/users/${u.id}`).then(() => {
      setNotification("User was successfully deleted");
      getUsers(currentPage);
    });
  };

  const getUsers = (page) => {
    // setLoading(true) is commented out to avoid a flickering effect during page transitions
    // The loading is so fast that it causes an unnatural blink on the screen
    // If needed, you can re-enable this functionality by uncommenting the line
    // setLoading(true);
    axiosClient
      .get(`/users?page=${page}`)
      .then(({ data }) => {
        setLoading(false);
        setUsers(data.data);
        setLinks(data.meta.links);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const onPageClick = (url) => {
    if (url) {
      const page = new URL(url).searchParams.get("page");
      setCurrentPage(parseInt(page, 10));
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Users</h1>
        <Link to="/users/new" className="btn-add">
          Add new
        </Link>
      </div>
      <div className="card animated fadeInDown">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Create Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          {loading && (
            <tbody>
              <tr>
                <td colSpan="5" className="text-center">
                  Loading...
                </td>
              </tr>
            </tbody>
          )}
          {!loading && (
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.created_at}</td>
                  <td>
                    <Link to={"/users/" + u.id} className="btn-edit">
                      Edit
                    </Link>
                    <button
                      onClick={(ev) => onDeleteClick(u)}
                      className="btn-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        <div className="pagination">
          {links.map((link, index) => (
            <button
              key={index}
              className={`btn-page ${link.active ? "active" : ""}`}
              disabled={!link.url}
              onClick={() => onPageClick(link.url)}
            >
              {link.label === "&laquo; Previous"
                ? "Previous"
                : link.label === "Next &raquo;"
                ? "Next"
                : link.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
