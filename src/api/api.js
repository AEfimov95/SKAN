/* eslint-disable */
/*
    Web API service generated
    
    version: 1.0
*/

export function Configuration(config) {
  this.basePath = "https://gateway.scan-interfax.ru";
  this.fetchMethod = window.fetch;
  this.headers = {};
  this.getHeaders = () => {
    return {};
  };
  this.responseHandler = null;
  this.errorHandler = null;

  if (config) {
    if (config.basePath) {
      this.basePath = config.basePath;
    }
    if (config.fetchMethod) {
      this.fetchMethod = config.fetchMethod;
    }
    if (config.headers) {
      this.headers = config.headers;
    }
    if (config.getHeaders) {
      this.getHeaders = config.getHeaders;
    }
    if (config.responseHandler) {
      this.responseHandler = config.responseHandler;
    }
    if (config.errorHandler) {
      this.errorHandler = config.errorHandler;
    }
  }
}

const setAdditionalParams = (params = [], additionalParams = {}) => {
  Object.keys(additionalParams).forEach((key) => {
    if (additionalParams[key]) {
      params.append(key, additionalParams[key]);
    }
  });
};

export function AccountApi(config) {
  this.config = config || new Configuration();

  this.apiV1AccountLoginPost = (body, options = {}) => {
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/account/login";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1AccountBalanceGet = (args, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/account/balance";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1AccountPurchaseHistoryGet = (args, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/account/purchaseHistory";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1AccountInfoGet = (args, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/account/info";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };
}

export function DocumentsApi(config) {
  this.config = config || new Configuration();

  this.apiV1DocumentsPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/documents";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };
}

export function EntitiesApi(config) {
  this.config = config || new Configuration();

  this.apiV1EntitiesFindEntitiesPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/entities/findEntities";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1EntitiesPersonsHintsGet = (args, options = {}) => {
    const { textToSearch, hintsCount, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/entities/persons/hints";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    if (textToSearch !== undefined) {
      params.append("textToSearch", textToSearch);
    }
    if (hintsCount !== undefined) {
      params.append("hintsCount", hintsCount);
    }
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1EntitiesEntityIdGet = (args, options = {}) => {
    const { entityId, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/entities/{entityId}";
    url = url
      .split(["{", "}"].join("entityId"))
      .join(encodeURIComponent(String(entityId)));
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1EntitiesPersonsSuggestionsPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/entities/persons/suggestions";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1EntitiesPersonsSuggestionsCompanyGet = (args, options = {}) => {
    const { name, sparkId, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/entities/persons/suggestions/company";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    if (name !== undefined) {
      params.append("name", name);
    }
    if (sparkId !== undefined) {
      params.append("sparkId", sparkId);
    }
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1EntitiesPersonsSuggestionsRoleGet = (args, options = {}) => {
    const { name, role, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/entities/persons/suggestions/role";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    if (name !== undefined) {
      params.append("name", name);
    }
    if (role !== undefined) {
      params.append("role", role);
    }
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1EntitiesPersonsSuggestionsRoleClusterGet = (args, options = {}) => {
    const { name, role, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/entities/persons/suggestions/role-cluster";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    if (name !== undefined) {
      params.append("name", name);
    }
    if (role !== undefined) {
      params.append("role", role);
    }
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1EntitiesPersonsPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/entities/persons";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1EntitiesGetRiskPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/entities/getRisk";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1EntitiesSubjectsGet = (args, options = {}) => {
    const { index, pageSize, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/entities/subjects";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    if (index !== undefined) {
      params.append("index", index);
    }
    if (pageSize !== undefined) {
      params.append("pageSize", pageSize);
    }
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1EntitiesGetSparkIdsPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/entities/getSparkIds";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1EntitiesCheckMaxFullnessSearchPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/entities/checkMaxFullnessSearch";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1EntitiesCompaniesSuggestionsForeignGet = (args, options = {}) => {
    const { Names, CountryCode, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/entities/companies/suggestions/foreign";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    if (Names !== undefined) {
      (Names || []).forEach((item) => {
        params.append("Names", item);
      });
    }
    if (CountryCode !== undefined) {
      params.append("CountryCode", CountryCode);
    }
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };
}

export function EventsApi(config) {
  this.config = config || new Configuration();

  this.apiV1EventsFilterIdGet = (args, options = {}) => {
    const { filterId, Offset, Date, Count, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/events/{filterId}";
    url = url
      .split(["{", "}"].join("filterId"))
      .join(encodeURIComponent(String(filterId)));
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    if (Offset !== undefined) {
      params.append("Offset", Offset);
    }
    if (Date !== undefined) {
      params.append("Date", Date);
    }
    if (Count !== undefined) {
      params.append("Count", Count);
    }
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1EventsArchiveLoadTaskResultGet = (args, options = {}) => {
    const { filterId, taskId, Offset, Date, Count, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/events/archiveLoadTask/result";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    if (filterId !== undefined) {
      params.append("filterId", filterId);
    }
    if (taskId !== undefined) {
      params.append("taskId", taskId);
    }
    if (Offset !== undefined) {
      params.append("Offset", Offset);
    }
    if (Date !== undefined) {
      params.append("Date", Date);
    }
    if (Count !== undefined) {
      params.append("Count", Count);
    }
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1EventsArchiveLoadTaskStatusGet = (args, options = {}) => {
    const { taskId, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/events/archiveLoadTask/status";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    if (taskId !== undefined) {
      params.append("taskId", taskId);
    }
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };
}

export function EventsFiltersApi(config) {
  this.config = config || new Configuration();

  this.apiV1FiltersAllGet = (args, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/filters/all";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1FiltersIdGet = (args, options = {}) => {
    const { id, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/filters/{id}";
    url = url.split(["{", "}"].join("id")).join(encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1FiltersIdPut = (args, body, options = {}) => {
    const { id, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/filters/{id}";
    url = url.split(["{", "}"].join("id")).join(encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "put",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      promise.then((response) => {
        if (
          response.status === 200 ||
          response.status === 204 ||
          response.status === 304
        ) {
          resolve(response);
        } else {
          reject(response);
        }
      }, catcher);
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1FiltersIdDelete = (args, options = {}) => {
    const { id, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/filters/{id}";
    url = url.split(["{", "}"].join("id")).join(encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "delete",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      promise.then((response) => {
        if (
          response.status === 200 ||
          response.status === 204 ||
          response.status === 304
        ) {
          resolve(response);
        } else {
          reject(response);
        }
      }, catcher);
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1FiltersNewPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/filters/new";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };
}

export function FeedDocumentsApi(config) {
  this.config = config || new Configuration();

  this.apiV1FeedDocumentsPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/feedDocuments";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };
}

export function ListApi(config) {
  this.config = config || new Configuration();

  this.apiV1ListAllGet = (args, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/list/all";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1ListCreatePost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/list/create";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1ListListIdGet = (args, options = {}) => {
    const { listId, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/list/{listId}";
    url = url
      .split(["{", "}"].join("listId"))
      .join(encodeURIComponent(String(listId)));
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1ListListIdDelete = (args, options = {}) => {
    const { listId, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/list/{listId}";
    url = url
      .split(["{", "}"].join("listId"))
      .join(encodeURIComponent(String(listId)));
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "delete",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      promise.then((response) => {
        if (
          response.status === 200 ||
          response.status === 204 ||
          response.status === 304
        ) {
          resolve(response);
        } else {
          reject(response);
        }
      }, catcher);
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1ListListIdPut = (args, body, options = {}) => {
    const { listId, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/list/{listId}";
    url = url
      .split(["{", "}"].join("listId"))
      .join(encodeURIComponent(String(listId)));
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "put",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      promise.then((response) => {
        if (
          response.status === 200 ||
          response.status === 204 ||
          response.status === 304
        ) {
          resolve(response);
        } else {
          reject(response);
        }
      }, catcher);
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1ListListIdActivePut = (args, options = {}) => {
    const { listId, state, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/list/{listId}/active";
    url = url
      .split(["{", "}"].join("listId"))
      .join(encodeURIComponent(String(listId)));
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    if (state !== undefined) {
      params.append("state", state);
    }
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "put",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      promise.then((response) => {
        if (
          response.status === 200 ||
          response.status === 204 ||
          response.status === 304
        ) {
          resolve(response);
        } else {
          reject(response);
        }
      }, catcher);
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1ListListIdListCompaniesDelete = (args, body, options = {}) => {
    const { listId, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/list/{listId}/listCompanies";
    url = url
      .split(["{", "}"].join("listId"))
      .join(encodeURIComponent(String(listId)));
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      promise.then((response) => {
        if (
          response.status === 200 ||
          response.status === 204 ||
          response.status === 304
        ) {
          resolve(response);
        } else {
          reject(response);
        }
      }, catcher);
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1ListListIdListCompaniesPut = (args, body, options = {}) => {
    const { listId, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/list/{listId}/listCompanies";
    url = url
      .split(["{", "}"].join("listId"))
      .join(encodeURIComponent(String(listId)));
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "put",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };
}

export function ObjectSearchApi(config) {
  this.config = config || new Configuration();

  this.apiV1ObjectsearchPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/objectsearch";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1ObjectsearchHistogramsPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/objectsearch/histograms";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1ObjectsearchAnalyticsPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/objectsearch/analytics";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1ObjectsearchTopPublicationsPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/objectsearch/topPublications";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1ObjectsearchSearchTaskNewPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/objectsearch/searchTask/new";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1ObjectsearchSearchTaskIdMappingsGet = (args, options = {}) => {
    const { id, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/objectsearch/searchTask/{id}/mappings";
    url = url.split(["{", "}"].join("id")).join(encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1ObjectsearchSearchTaskIdResultGet = (args, options = {}) => {
    const { id, limit, offset, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/objectsearch/searchTask/{id}/result";
    url = url.split(["{", "}"].join("id")).join(encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    if (limit !== undefined) {
      params.append("limit", limit);
    }
    if (offset !== undefined) {
      params.append("offset", offset);
    }
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };
}

export function RiskApi(config) {
  this.config = config || new Configuration();

  this.apiV1RiskFindRisksByCompaniesListPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/risk/findRisksByCompaniesList";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1RiskFindSubjectsByCompaniesListPost = (
    args,
    body,
    options = {}
  ) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/risk/findSubjectsByCompaniesList";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1RiskGetRiskFactorsCatalogGet = (args, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/risk/getRiskFactorsCatalog";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1RiskIrrSparkIdGet = (args, options = {}) => {
    const { sparkId, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/risk/irr/{sparkId}";
    url = url
      .split(["{", "}"].join("sparkId"))
      .join(encodeURIComponent(String(sparkId)));
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };
}

export function SearchApi(config) {
  this.config = config || new Configuration();

  this.apiV1SearchGetAllTermsExamplesPost = (body, options = {}) => {
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/search/getAllTermsExamples";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1SearchFindPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/search/find";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1SearchFindByIdPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/search/findById";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1SearchGetDocumentsPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/search/getDocuments";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1SearchFindByCompaniesListPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/search/findByCompaniesList";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1SearchGetVisibilityIndexPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/search/getVisibilityIndex";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };
}

export function SourcesApi(config) {
  this.config = config || new Configuration();

  this.apiV1SourcesGet = (args, options = {}) => {
    const { index, pageSize, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/sources";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    if (index !== undefined) {
      params.append("index", index);
    }
    if (pageSize !== undefined) {
      params.append("pageSize", pageSize);
    }
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1SourcesCategoriesGet = (args, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/sources/categories";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1SourcesLevelsGet = (args, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/sources/levels";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1SourcesTopicsGet = (args, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/sources/topics";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1SourcesRegionsGet = (args, options = {}) => {
    const { regionType, index, pageSize, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/sources/regions";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    if (regionType !== undefined) {
      params.append("regionType", regionType);
    }
    if (index !== undefined) {
      params.append("index", index);
    }
    if (pageSize !== undefined) {
      params.append("pageSize", pageSize);
    }
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1SourcesGroupsGet = (args, options = {}) => {
    const { index, pageSize, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/sources/groups";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    if (index !== undefined) {
      params.append("index", index);
    }
    if (pageSize !== undefined) {
      params.append("pageSize", pageSize);
    }
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };
}

export function UserQueryApi(config) {
  this.config = config || new Configuration();

  this.apiV1UserQueryGet = (args, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/userQuery";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1UserQueryPost = (args, body, options = {}) => {
    const { Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/userQuery";
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...getHeaders(),
          ...options.headers,
        },
        body: "object" === typeof body ? JSON.stringify(body) : body,
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1UserQueryIdGet = (args, options = {}) => {
    const { id, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/userQuery/{id}";
    url = url.split(["{", "}"].join("id")).join(encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "get",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      if (options.returnResponse) {
        promise.then((response) => resolve(response), catcher);
      } else {
        promise
          .then((response) => {
            if (
              response.status === 200 ||
              response.status === 204 ||
              response.status === 304
            ) {
              return response.json();
            } else {
              reject(response);
            }
          }, catcher)
          .then((data) => resolve(data), catcher);
      }
    });
    promise.abort = () => controller.abort();
    return promise;
  };

  this.apiV1UserQueryIdDelete = (args, options = {}) => {
    const { id, Authorization } = args;
    const {
      fetchMethod,
      basePath,
      headers,
      getHeaders,
      responseHandler,
      errorHandler,
    } = this.config;
    let url = "/api/v1/userQuery/{id}";
    url = url.split(["{", "}"].join("id")).join(encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    setAdditionalParams(params, options.params);
    const query = params.toString();
    const controller = new AbortController();
    const promise = new Promise((resolve, reject) => {
      const promise = fetchMethod(basePath + url + (query ? "?" + query : ""), {
        signal: controller.signal,
        method: "delete",
        headers: { ...headers, ...getHeaders(), ...options.headers },
      });
      !!errorHandler && promise.catch(errorHandler);
      const catcher = (error) => error?.name !== "AbortError" && reject(error);
      !!responseHandler && promise.then(responseHandler, catcher);
      promise.then((response) => {
        if (
          response.status === 200 ||
          response.status === 204 ||
          response.status === 304
        ) {
          resolve(response);
        } else {
          reject(response);
        }
      }, catcher);
    });
    promise.abort = () => controller.abort();
    return promise;
  };
}
