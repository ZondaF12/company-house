/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/flowbite/**/*.js",
        "./node_modules/flowbite-react/**/*.js",
    ],
    plugins: [require("flowbite/plugin")],
    theme: {},
};
