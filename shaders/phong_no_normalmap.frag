#version 330
#extension GL_ARB_shading_language_420pack : enable
#extension GL_ARB_explicit_uniform_location : enable

in vec2 UV;
out vec3 color;

layout(binding=0) uniform sampler2D DiffuseTextureSampler;

void main(){
    vec3 texColor = texture( DiffuseTextureSampler, UV ).rgb;
    color = texColor;
}