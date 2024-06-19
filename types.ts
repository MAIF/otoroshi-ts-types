export interface TlsConfig {
  certs: any;
  trusted_certs: any;
  enabled: Boolean;
  loose: Boolean;
  trust_all: Boolean;
}


export interface Backend {
  id: string;
  hostname: string;
  port: number;
  tls: Boolean;
  weight: number;
  protocol: string;
  ip_address?: string;
  predicate: any;
  tls_config?: TlsConfig;
}


export interface Apikey {
  clientId: string;
  clientName: string;
  metadata: { [key: string]: string };
  tags: string[];
}

export interface User {
  name: string;
  email: string;
  profile: any;
  metadata: { [key: string]: string };
  tags: string[];
}

export interface RawRequest {
  id: number;
  method: string;
  headers: { [key: string]: string };
  cookies: any;
  tls: Boolean;
  uri: string;
  path: string;
  query: { [key: string]: string[] };
  version: string;
  has_body: Boolean;
  remote: string;
  client_cert_chain: any;
}

export interface Frontend {
  domains: string[];
  strict_path?: string;
  exact: Boolean;
  headers: { [key: string]: string };
  query: { [key: string]: string };
  methods: string[];
}

export interface HealthCheck {
  enabled: Boolean;
  url: string;
}

export interface Client {
  retries: Number;
  max_errors: Number;
  retry_initial_delay: Number;
  backoff_factor: Number;
  call_timeout: Number;
  call_and_stream_timeout: Number;
  connection_timeout: Number;
  idle_timeout: Number;
  global_timeout: Number;
  sample_interval: Number;
  proxy: any;
  custom_timeouts: any;
  cache_connection_settings: any;
}

export interface RouteBackend {
  targets: Backend[];
  root: string;
  rewrite: Boolean;
  load_balancing: any;
  client: Client;
  health_check?: HealthCheck;
}

export interface Location {
  tenant: string;
  teams: string[];
}

export interface Route {
  _loc: Location;
  id: string;
  name: string;
  description: string;
  tags: string[];
  metadata: { [key: string]: string };
  enabled: Boolean;
  debug_flow: Boolean;
  export_reporting: Boolean;
  capture: Boolean;
  groups: string[];
  frontend: Frontend;
  backend: RouteBackend;
  backend_ref?: string;
  plugins: any;
}

export interface OtoroshiResponse {
  status: number;
  headers: { [key: string]: string };
  cookies: any;
}

export interface Cookie {
  name: string;
  value: string;
  domain?: string;
  path: string;
  maxAge?: number;
  secure: Boolean;
  httpOnly: Boolean;
}

export interface OtoroshiRequest {
  url: string;
  method: string;
  headers: { [key: string]: string };
  query: { [key: string]: string[] };
  version: string;
  client_cert_chain: any;
  backend?: Backend;
  cookies: Cookie[];
}

export interface WasmBackendContext {
  snowflake?: string;
  backend: Backend;
  apikey?: Apikey;
  user?: User;
  raw_request: RawRequest;
  config: Config;
  global_config: any;
  attrs: any;
  route: Route;
  request_body_bytes?: number[];
  request: OtoroshiRequest;
}

export interface Source {
  kind: string;
  path: string;
  opts: any;
}

export interface AuthorizationRights {
  read: Boolean;
  write: Boolean;
}

export interface Authorizations {
  httpAccess: Boolean;
  proxyHttpCallTimeout: Number;
  globalDataStoreAccess: AuthorizationRights;
  pluginDataStoreAccess: AuthorizationRights;
  globalMapAccess: AuthorizationRights;
  pluginMapAccess: AuthorizationRights;
  proxyStateAccess: Boolean;
  configurationAccess: Boolean;
}

export interface KillOptions {
  immortal: Boolean;
  max_calls: Number;
  max_memory_usage: Number;
  max_avg_call_duration: Number;
  max_unused_duration: Number;
}

export interface Config {
  source: Source;
  memoryPages: Number;
  functionName: string;
  config: any;
  allowedHosts: string[];
  allowedPaths: any;
  wasi: Boolean;
  opa: Boolean;
  authorizations: Authorizations;
  instances: Number;
  killOptions: KillOptions;
}

export interface WasmAccessValidatorContext {
  snowflake?: string;
  apikey?: Apikey;
  user?: User;
  request: RawRequest;
  config: Config;
  global_config: any;
  attrs: any;
  route: Route;
}

export interface WasmRequestTransformerContext {
  snowflake: string;
  raw_request: OtoroshiRequest;
  otoroshi_request: OtoroshiRequest;
  backend: Backend;
  apikey?: Apikey;
  user?: User;
  request: RawRequest;
  config: any;
  global_config: any;
  attrs: any;
  route: Route;
  request_body_bytes?: number[];
}

export interface WasmResponseTransformerContext {
  snowflake?: string;
  raw_response: OtoroshiResponse;
  otoroshi_response: OtoroshiResponse;
  apikey?: Apikey;
  user?: User;
  request: RawRequest;
  config: Config;
  global_config: any;
  attrs: any;
  route: Route;
  response_body_bytes?: number[];
}

export interface WasmSinkContext {
  snowflake?: string;
  request: RawRequest;
  config: any;
  global_config: any;
  attrs: any;
  origin: string;
  status: number;
  message: string;
}

export interface OtoroshiPluginResponse {
  content: string;
}

export interface WasmBackendResponse {
  headers?: { [key: string]: string };
  body_bytes?: number[];
  body_base64?: string;
  body_json?: any;
  body_str?: string;
  status: number;
}

export interface WasmAccessValidatorError {
  message: string;
  status: number;
}

export interface WasmAccessValidatorResponse {
  result: Boolean;
  error?: WasmAccessValidatorError;
}

export interface WasmTransformerResponse {
  headers: { [key: string]: string };
  cookies: any;
  body_bytes?: number[];
  body_base64?: string;
  body_json?: any;
  body_str?: string;
}

export interface WasmSinkMatchesResponse {
  result: Boolean;
}

export interface WasmSinkHandleResponse {
  status: number;
  headers: { [key: string]: string };
  body_bytes?: number[];
  body_base64?: string;
  body_json?: any;
  body_str?: string;
}

export interface WasmJobContext {
  attrs: any;
  global_config: any;
  snowflake?: string;
}

export interface WasmJobResult { }

export interface WasmMatchRouteContext {
  snowflake?: string;
  route: Route;
  request: RawRequest;
  config: any;
  attrs: any;
}

export interface WasmMatchRouteResponse {
  result: Boolean;
}

export interface WasmPreRouteContext {
  snowflake?: string;
  route: Route;
  request: RawRequest;
  config: any;
  global_config: any;
  attrs: any;
}

export interface WasmPreRouteResponse {
  status: number;
  error?: Boolean;
  headers?: { [key: string]: string };
  body?: string;
  body_bytes?: number[];
  body_base64?: string;
  body_json?: any;
  body_str?: string;
}

export interface WasmRequestHandlerContext {
  request: RawRequest;
}

export interface WasmRequestHandlerResponse {
  status: number;
  headers: { [key: string]: string };
  body_bytes?: number[];
  body_base64?: string;
  body_json?: any;
  body_str?: string;
}
