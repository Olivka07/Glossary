import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import { BuildEnv, WebpackConfigOptions, ModeType, BuildPaths } from './config/build/types/config';
import { buildResolvers } from './config/build/buildResolvers';
import { buildPlugins } from './config/build/buildPlugins';
import { buildLoaders } from './config/build/buildLoaders';
import { buildDevServer } from './config/build/buildDevServer';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv): webpack.Configuration => {
    const mode = env.mode || 'development';
    const port = env.port || 3000;
    const isDev = mode === 'development';

    const pathes: BuildPaths = {
        build: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html')
    };

    const options: WebpackConfigOptions = {
        paths: pathes,
        port,
        isDev,
        mode
    };

    const config: webpack.Configuration = buildWebpackConfig(options);

    return config;
};
