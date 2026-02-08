import { blogAxios } from "./axios";

// News
export const getAllNewsApi = (page, limit) => {
  return blogAxios.get(`/news/updates/show?page=${page}&limit=${limit || 10}`);
};
export const getPublishedNewsApi = (page, limit) => {
  return blogAxios.get(
    `/news/updates/show?page=${page}&limit=${limit || 10}&action_type=Publish`
  );
};
export const getIndividualNewsByIdApi = (id) => {
  return blogAxios.get(`/news/updates/show/${id}`);
};
export const getIndividualNewsByPermalinkApi = (permalink) => {
  return blogAxios.get(`/news/updates/show/published/${permalink}`);
};
export const createNewsApi = (data) => {
  return blogAxios.post(`/news/updates/create`, data);
};
export const editNewsApi = (data) => {
  return blogAxios.patch(`/news/updates/modify/${data.id}`, data.data);
};
export const deleteNewsApi = (id) => {
  return blogAxios.delete(`/news/updates/delete/${id}`);
};


// Resources
export const getAllResourcesApi = (page, limit) => {
  return blogAxios.get(`/resources/show?page=${page}&limit=${limit || 10}`);
};
export const getPublishedResourcesApi = (page, limit) => {
  return blogAxios.get(
    `/resources/show?page=${page}&limit=${limit || 10}&action_type=Publish`
  );
};
export const getIndividualResourceByIdApi = (id) => {
  return blogAxios.get(`/resources/show/${id}`);
};
export const getIndividualResourceByPermalinkApi = (permalink) => {
  return blogAxios.get(`/resources/show/published/${permalink}`);
};
export const createResourceApi = (data) => {
  return blogAxios.post(`/resources/create`, data);
};
export const editResourceApi = (data) => {
  return blogAxios.patch(`/resources/modify/${data.id}`, data.data);
};
export const deleteResourceApi = (id) => {
  return blogAxios.delete(`/resources/delete/${id}`);
};



// Testimonials
export const getAllTestimonialsApi = (page, limit) => {
  return blogAxios.get(`/testimonials/show?page=${page}&limit=${limit || 10}`);
};
export const getPublishedTestimonialsApi = (page, limit) => {
  return blogAxios.get(
    `/testimonials/show?page=${page}&limit=${limit || 10}&action_type=Publish`
  );
};
export const getIndividualTestimonialApi = (id) => {
  return blogAxios.get(`/testimonials/show/${id}`);
};
export const createTestimonialApi = (data) => {
  return blogAxios.post(`/testimonials/create`, data);
};
export const editTestimonialApi = (data) => {
  return blogAxios.patch(`/testimonials/modify/${data.id}`, data.data);
};
export const deleteTestimonialApi = (id) => {
  return blogAxios.delete(`/testimonials/delete/${id}`);
};



// Blogs
// Get all blogs (Draft + Published)
export const getAllBlogsApi = (page, limit) => {
  return blogAxios.get(`/blogs/show?page=${page}&limit=${limit || 10}`);
};

// Get all published blogs
export const getAllPublishedBlogsApi = (page, limit) => {
  return blogAxios.get(
    `/blogs/show?page=${page}&limit=${limit || 10}&action_type=Publish`
  );
};

// Get blog by ID (UUID)
export const getBlogByIdApi = (id) => {
  return blogAxios.get(`/blogs/show/${id}`);
};

// Get blog by permalink
export const getBlogByPermalinkApi = (permalink) => {
  return blogAxios.get(`/blogs/show/published/${permalink}`);
};

// Create blog (Publish or Draft)
export const createBlogApi = (data) => {
  return blogAxios.post(`/blogs/create`, data);
};

// Update existing blog
export const updateBlogApi = ({ id, data }) => {
  return blogAxios.patch(`/blogs/modify/${id}`, data);
};


// Delete blog
export const deleteBlogApi = (id) => {
  return blogAxios.delete(`/blogs/delete/${id}`);
};


export const getAllItemsApi = (key, page = 1, limit = 10) => {
  return blogAxios.get(`/${key}?page=${page}&limit=${limit}`);
};

// Generalized delete API
export const deleteItemApi = (key, id) => {
  return blogAxios.delete(`/${key}/delete/${id}`);
};

// Generalized update API
export const updateItemApi = (key, id, data) => {
  return blogAxios.patch(`/${key}/modify/${id}`, data);
};

// Generalized create API
export const createItemApi = (key, data) => {
  return blogAxios.post(`/${key}/create`, data);
};

// Image upload API

export const uploadImageApi = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return blogAxios.post("/media/save", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Get all logos Clients

export const createClientApi = (data) => {
  return blogAxios.post("/clients/create", data);
};

export const getAllClientsApi = (page = 1, limit = 20) => {
  return blogAxios.get(`/clients/show?page=${page}&limit=${limit}`);
};

export const getClientByIdApi = (id) => {
  return blogAxios.get(`/clients/show/${id}`);
};

export const updateClientApi = (id, data) => {
  return blogAxios.patch(`/clients/modify/${id}`, data);
};

export const deleteClientApi = (id) => {

  return blogAxios.delete('/clients/delete', {
    data: { clientsId: [id]  }, // For DELETE requests, you should use 'data' for the request body
  });
};
