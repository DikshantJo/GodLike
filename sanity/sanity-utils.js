import { createClient, groq } from 'next-sanity';

export async function getProjects() {
    const client = createClient({
        projectId: 'nahm0f1b',
        dataset: 'production',
        apiVersion: '2023-10-01',
    });

    return client.fetch(
        groq`*[_type == "Product"] {
            _id,
            _createdAt,
            name,
            "image": image.asset->url, // Corrected the typo here
            url,
            content
        }`
    );
}


export async function getProjectsInterior() {
    const client = createClient({
        projectId: 'nahm0f1b',
        dataset: 'production',
        apiVersion: '2023-10-01',
    });

    return client.fetch(
        groq`*[_type == "Interior"] {
            _id,
            _createdAt,
            name,
            "image": image.asset->url, // Corrected the typo here
            url,
            content
        }`
    );
}


export async function getProjectFAQ() {
    const client = createClient({
        projectId: 'nahm0f1b',
        dataset: 'production',
        apiVersion: '2023-10-01',
    });

    return client.fetch(
        groq`*[_type == "faq"] {
          answer,
          question
        }`
    );
}


export async function getPolcies() {
    const client = createClient({
        projectId: 'nahm0f1b',
        dataset: 'production',
        apiVersion: '2023-10-01',
    });

    return client.fetch(
        groq`*[_type == "Policies"] {
            _id,
            _createdAt,
            slug,
            "image": image.asset->url, // Corrected the typo here
            url,
            content,
            text,
        }`
    );
}

export async function SliderLeft() {
    const client = createClient({
        projectId: 'nahm0f1b',
        dataset: 'production',
        apiVersion: '2023-10-01',
    });

    return client.fetch(
        groq`*[_type == "HomeLeft"] {
            name,
            "image": image.asset->url, // Corrected the typo here
            url,
        }`
    );
}


export async function SliderRight() {
    const client = createClient({
        projectId: 'nahm0f1b',
        dataset: 'production',
        apiVersion: '2023-10-01',
    });

    return client.fetch(
        groq`*[_type == "SliderRight"] {
            name,
            "image": image.asset->url, // Corrected the typo here
            url,
        }`
    );
}

export async function Slidercenter() {
    const client = createClient({
        projectId: 'nahm0f1b',
        dataset: 'production',
        apiVersion: '2023-10-01',
    });

    return client.fetch(
        groq`*[_type == "Slidercenter"] {
            name,
            "image": image.asset->url, // Corrected the typo here
            url,
        }`
    );
}