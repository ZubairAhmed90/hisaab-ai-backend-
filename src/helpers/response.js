const ok = (data, message = 'Success') => ({ success: true, data, message });
const fail = (message) => ({ success: false, data: null, message });

module.exports = { ok, fail };
