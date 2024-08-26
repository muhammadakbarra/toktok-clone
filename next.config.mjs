/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // menambahkan aturan untuk menangani modul biner canvas.node
        config.module.rules.push({ test: /\.node$/, use: 'raw-loader' });

        //Kecualikan kanvas agar tidak diproses oleh next.js di browser
        if (!isServer) config.externals.push('canvas');
        return config;
    },
};

export default nextConfig;
