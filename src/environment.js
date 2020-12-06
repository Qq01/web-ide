export const environment = {
    use_cdn: true
};
let env = localStorage.getItem('environment');
if (env) {
    env = JSON.parse(env);
}
Object.assign(environment, env);