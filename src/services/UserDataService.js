import http from "@/utils/http-common";

class UserDataService {
  getAll() {
    return http.get("/users/all");
  }

  get(data) {
    return http.post(`/users/user`,data);
  }

  create(data) {
    return http.post("/users/create", data);
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  delete(id) {
    return http.delete(`/users/delete/${id}`);
  }

}

export default new UserDataService();
