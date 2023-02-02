class Config {
  public TYPEORM_PORT = process.env.TYPEORM_PORT as number | undefined;

  public PORT = process.env.PORT ?? 8002;
}

export default new Config();
