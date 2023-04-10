function getAcceleration(o) {
    if (o.F != null && o.m != null) {
        return o.F/o.m
    }
    if (o.Δv != null && o.Δt != null) {
        return o.Δv/o.Δt
    }
    if (o.d != null && o.t != null) {
        return 2*o.d/Math.pow(o.t, 2)
    }
    return "impossible"
}